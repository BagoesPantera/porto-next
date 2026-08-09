const skillCode = `data class Skill(val category: String, val tools: List<String>)

val primaryStack = "Laravel / PHP"

val stack = listOf(
    Skill("Backend Framework", listOf("Laravel", "PHP")),
    Skill("Frontend", listOf("React.js", "Vue.js", "Livewire", "Filament", "Blade")),
    Skill("Database & Backend", listOf("MySQL", "PostgreSQL", "Redis", "REST API")),
    Skill("Deployment & Infrastructure", listOf("AWS", "VPS", "cPanel", "Git"))
)

fun printStack() {
    println("Primary: " + primaryStack)
    stack.forEach { skill ->
        println(skill.category + ": " + skill.tools.joinToString(", "))
    }
}
`
export default skillCode;