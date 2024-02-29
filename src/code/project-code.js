const projectCode = `package main

import "net/http"
import "fmt"
import "html/template"

const view string = '<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
    <a href='#' target="_blank">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">My Projects Title</h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">A cool project.</p>
    <div className="w-100 flex h-full items-end">
        <a href='#' target="_blank" className="inline-flex font-medium items-center text-blue-600 hover:underline">
            Visit
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
            </svg>
        </a>
        <div className="flex ms-auto">
            <Image src={icon} className="ms-1 w-6 h-6" alt="icon" />
        </div>
    </div>
</div>
</div>'

func main() {
    http.HandleFunc("/project", func(w http.ResponseWriter, r *http.Request) {
        var tmpl = template.Must(template.New("main-template").Parse(view))
        if err := tmpl.Execute(w, nil); err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
        }
    })

    fmt.Println("server started at localhost:9000")
    http.ListenAndServe(":9000", nil)
}
`

export default projectCode