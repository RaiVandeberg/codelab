type Course = import("@/generated/prisma").Course
type CourseTag = import("@/generated/prisma").CourseTag
type CourseModule = import("@/generated/prisma").CourseModule
type CourseLesson = import("@/generated/prisma").CourseLesson
type CompletedLesson = import("@/generated/prisma").CompletedLesson
type LessonComment = import("@/generated/prisma").LessonComment
type User = import("@/generated/prisma").User


type CourseModuleWithLessons = CourseModule & {
    lessons: CourseLesson[];
}

type CourseWithModulesAndTags = Course & {
    tags: CourseTag[];
    modules: CourseModule[];
}

type CourseWithModulesAndLessons = Course & {
    modules: CourseModuleWithLessons[];
}

type LessonCommentWithUserAndReplies = LessonComment & {
    user: User;
    replies?: LessonCommentWithUserAndReplies[];
}