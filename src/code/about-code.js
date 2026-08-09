const aboutCode = `class AboutController < ApplicationController
  def index
    @cv_url = "https://drive.google.com/file/d/1s4zxtKG1X3z6OXUq6R2ECKmMfMjVb4I3/view"
    render html: <<~HTML.html_safe
      <h1>About</h1>
      <div class="pl-4 border-s-4 border-gray-300 py-5">
        <p>Hi, I&#39;m Pantera, a backend developer from Bali, Indonesia.
        While currently an informatics student at Primakara University,
        my passion for coding stems from the constant challenge of
        learning new things. While I primarily work with JavaScript
        and PHP, I&#39;m always open to exploring new programming
        languages for potential collaborations.</p>
        <a href="#{@cv_url}" target="_blank">Download my CV</a>
      </div>
    HTML
  end
end`
export default aboutCode;