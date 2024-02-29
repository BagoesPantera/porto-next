'use client'

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function CodePage() {
    const hightlightWithLineNumbers = (input, language) =>
        highlight(input, language)
            .split("\n")
            .map((line, i) => `<span class='line-numbers'>${i + 1}</span>${line}`)
            .join("\n");

    const code = `console.log('tes')`

    return (
        <div className="overflow-hidden w-100">

            <Editor
                value={code}
                highlight={code => hightlightWithLineNumbers(code, languages.js)}
                padding={10}
                className="editor"
                readOnly={true}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    outline: 0
                }}
            />
        </div>
    )
}