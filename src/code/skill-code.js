const skillCode = `class SkillActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_skill)

        val skillContent = """
            <h1>Tech Skills</h1>
            <div class="flex flex-col gap-10">
                <div class="border-s-4 border-gray-300 py-5">
                    <div class="flex items-center">
                        <img src="@drawable/js_icon" class="w-10 h-10" />
                        <span class="font-bold">JavaScript</span>
                    </div>
                    <p>I'm proficient in both frontend and backend development
                    using JavaScript. I have experience working with various
                    frameworks, including Vue, React, ExpressJS, and AdonisJS.</p>
                </div>
                <div class="border-s-4 border-gray-300 py-5">
                    <div class="flex items-center">
                        <img src="@drawable/php_icon" class="w-10 h-10" />
                        <span class="font-bold">PHP</span>
                    </div>
                    <p>While I possess strong experience in various programming
                    languages, I gravitate towards PHP as my primary choice for
                    projects. Laravel, a robust PHP framework, remains my go-to
                    for both MVC and API-based development due to its
                    efficiency and diverse functionalities.</p>
                </div>
            </div>
        """.trimIndent()

        skillText.text = Html.fromHtml(skillContent, Html.FROM_HTML_MODE_COMPACT)
    }
}`
export default skillCode;