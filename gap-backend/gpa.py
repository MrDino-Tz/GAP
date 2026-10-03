"""GPA calculation logic mirroring the GAP frontend (src/data/academicData.ts)."""

from typing import Any, Dict, List, Optional

# Official IAA grading scale
GRADING_SCALE = [
    {"letterGrade": "A", "gradePoint": 5.0, "minScore": 70, "maxScore": 100, "remark": "Excellent"},
    {"letterGrade": "B+", "gradePoint": 4.0, "minScore": 60, "maxScore": 69, "remark": "Very Good"},
    {"letterGrade": "B", "gradePoint": 3.0, "minScore": 50, "maxScore": 59, "remark": "Good"},
    {"letterGrade": "C", "gradePoint": 2.0, "minScore": 40, "maxScore": 49, "remark": "Satisfactory"},
    {"letterGrade": "D", "gradePoint": 1.0, "minScore": 35, "maxScore": 39, "remark": "Poor"},
    {"letterGrade": "F", "gradePoint": 0.0, "minScore": 0, "maxScore": 34, "remark": "Failure"},
]

GRADE_POINTS: Dict[str, float] = {g["letterGrade"]: g["gradePoint"] for g in GRADING_SCALE}
PASS_GRADE_POINT = 2.0  # grade points >= this count as passed


def letter_grade_for_score(score: float) -> str:
    """Return the letter grade for a numeric score (0-100)."""
    for g in GRADING_SCALE:
        if g["minScore"] <= score <= g["maxScore"]:
            return g["letterGrade"]
    return "F"


def grade_point_for_grade(letter_grade: str) -> float:
    """Return the grade point for a letter grade (A, B+, B, C, D, F)."""
    return GRADE_POINTS.get(letter_grade.upper().strip(), 0.0)


def calculate_semester_gpa(modules: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Compute semester GPA from a list of modules.

    Each module: {code?, name?, creditHours, gradePoint} or
                 {code?, name?, creditHours, grade}  (letter grade).
    Returns GPA, total credit hours, total quality points, and per-module breakdowns.
    """
    if not modules:
        return {
            "gpa": 0.0,
            "totalCreditHours": 0,
            "totalQualityPoints": 0.0,
            "passedModules": 0,
            "totalModules": 0,
            "modules": [],
        }

    total_quality_points = 0.0
    total_credit_hours = 0
    passed = 0
    breakdown = []

    for mod in modules:
        try:
            credit_hours = float(mod.get("creditHours", 0))
        except (TypeError, ValueError):
            credit_hours = 0.0

        grade_point = mod.get("gradePoint")
        if grade_point is None:
            grade_point = grade_point_for_grade(mod.get("grade") or "F")

        quality_points = credit_hours * float(grade_point)
        total_quality_points += quality_points
        total_credit_hours += credit_hours
        if float(grade_point) >= PASS_GRADE_POINT:
            passed += 1

        breakdown.append({
            "code": mod.get("code"),
            "name": mod.get("name"),
            "creditHours": credit_hours,
            "gradePoint": float(grade_point),
            "qualityPoints": quality_points,
            "passed": float(grade_point) >= PASS_GRADE_POINT,
        })

    gpa = total_quality_points / total_credit_hours if total_credit_hours > 0 else 0.0
    return {
        "gpa": round(gpa, 2),
        "totalCreditHours": total_credit_hours,
        "totalQualityPoints": round(total_quality_points, 1),
        "passedModules": passed,
        "totalModules": len(modules),
        "modules": breakdown,
    }


def calculate_cgpa(semesters: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Compute cumulative GPA from a list of semesters.

    Each semester: {semesterNumber?, semesterName?, gpa, totalCreditHours}.
    CGPA = sum(gpa * totalCreditHours) / sum(totalCreditHours).
    """
    if not semesters:
        return {
            "cgpa": 0.0,
            "totalSemesters": 0,
            "totalCreditHours": 0,
            "totalQualityPoints": 0.0,
            "semesters": [],
        }

    total_quality_points = 0.0
    total_credit_hours = 0
    breakdown = []

    for sem in semesters:
        try:
            gpa = float(sem.get("gpa", 0))
        except (TypeError, ValueError):
            gpa = 0.0
        try:
            credits = float(sem.get("totalCreditHours", 0))
        except (TypeError, ValueError):
            credits = 0.0

        total_quality_points += gpa * credits
        total_credit_hours += credits
        breakdown.append({
            "semesterNumber": sem.get("semesterNumber"),
            "semesterName": sem.get("semesterName"),
            "programmeName": sem.get("programmeName"),
            "gpa": gpa,
            "totalCreditHours": credits,
        })

    cgpa = total_quality_points / total_credit_hours if total_credit_hours > 0 else 0.0
    return {
        "cgpa": round(cgpa, 2),
        "totalSemesters": len(semesters),
        "totalCreditHours": total_credit_hours,
        "totalQualityPoints": round(total_quality_points, 1),
        "semesters": breakdown,
    }