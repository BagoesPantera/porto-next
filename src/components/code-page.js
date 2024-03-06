'use client'

import { usePathname } from 'next/navigation'
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-java'

import homeCode from "@/code/home-code";
import projectCode from '@/code/project-code';
import aboutCode from '@/code/about-code';
import skillCode from '@/code/skill-code';
import hobbiesCode from '@/code/hobbies-code';

export default function CodePage() {
    const hightlightWithLineNumbers = (input, language) =>
        highlight(input, language)
            .split("\n")
            .map((line, i) => `<span class='editorLineNumber' key='${i}'>${i + 1}</span>${line}`)
            .join("\n");

    const pathName = usePathname()

    let code = ''
    let language;

    switch (pathName) {
        case '/':
            code = homeCode
            language = languages.jsx
            break;
        case '/project':
            code = projectCode
            language = languages.go
            break;
        case '/contact':
            code = 'print()'
            language = languages.python
            break;
        case '/about':
            code = aboutCode
            language = languages.ruby
            break;
        case '/about/skill':
            code = skillCode
            language = languages.kotlin
            break;
        case '/about/hobbies':
            code = hobbiesCode
            language = languages.java

        default:
            break;
    }

    return (
        <div className="w-100">
            <Editor
                value={code}
                highlight={code => hightlightWithLineNumbers(code, language)}
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