const aboutCode = `class AboutController < ApplicationController
  SUMMARY = {
    name: "Bagoes Pantera",
    role: "Full-Stack Laravel Developer",
    background: "developing and maintaining web-based information systems",
    experience: [
      "backend services",
      "database design",
      "business workflows",
      "user-facing interfaces"
    ],
    milestones: "Top 100 - Google Solution Challenge 2024",
    certifications: %w[Software (BNSP), Network & System Security (FCNS)]
  }.freeze

  def index
    render json: SUMMARY
  end
end
`
export default aboutCode;