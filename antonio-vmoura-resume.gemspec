lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "antonio-vmoura-resume/version"

Gem::Specification.new do |spec|
  spec.name          = "antonio-vmoura-resume"
  spec.version       = Resume::VERSION
  spec.authors       = ["Antônio Rodrigues"]

  spec.summary       = "A modern simple static resume template and theme. Powered by Jekyll and GitHub pages."
  spec.homepage      = "https://antonio-vmoura.github.io/"
  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.required_ruby_version = '~> 3.0'

  spec.add_runtime_dependency "github-pages"
  spec.add_runtime_dependency "jekyll"
  spec.add_runtime_dependency "jekyll-seo-tag"
  spec.add_development_dependency "html-proofer"
end
