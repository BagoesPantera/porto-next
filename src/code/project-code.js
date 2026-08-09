const projectCode = `package main

import (
	"fmt"
	"html/template"
	"net/http"
)

const view = \`<h1>Featured Projects</h1>
<div class="flex flex-col gap-10">
    <article class="border-s-4 border-gray-300 py-5">
        <div class="flex items-center">
            <img src="/react.svg" class="w-10 h-10" />
            <span>Mardi</span>
        </div>
        <p>I built this online Markdown editor using React and Tailwind CSS.
        It was motivated by the difficulty I faced in creating a good README
        file for my GitHub repository.</p>
        <a href="https://bagoespantera.github.io/markdown-editor-react/"
           class="underline text-sky-500" target="_blank">Visit</a>
    </article>
    <article class="border-s-4 border-gray-300 py-5">
        <div class="flex items-center">
            <img src="/vue.svg" class="w-10 h-10" />
            <span>IP Tracker</span>
        </div>
        <p>This IP Tracker, built with Vue.js and Tailwind CSS, supports both
        IPv4 and IPv6 addresses. I created it to explore Vue.js and map
        functionalities using OpenStreetMap and Leaflet.js.</p>
        <a href="https://bagoespanera.github.io/ip-tracking-vue/"
           class="underline text-sky-500" target="_blank">Visit</a>
    </article>
</div>\`

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/project", func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.New("projects").Parse(view))
		if err := tmpl.Execute(w, nil); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})
	fmt.Println("server started at localhost:9000")
	http.ListenAndServe(":9000", mux)
}
`
export default projectCode;