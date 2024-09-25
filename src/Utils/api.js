function courseAPI() {
    if (process.env.NODE_ENV == "development") {
        return "/v1/courses"
    } else {
        return `${process.env.VUE_APP_BACKEN}/v1/courses`
    }
}

export default courseAPI