# GitHub pages for project GeoMop <img src="http://geomop.github.io/assets/favicon.ico" height="40" />
Project GeoMop website, available at [geomop.github.io](http://geomop.github.io/).

Running using [Jekyll](https://jekyllrb.com/) with js libraries [Angular.io](https://angular.io/)

## Running locally
First, clone the repository and then execute follwing:
```bash
bundle install
jekyll server --watch
```
or if your Gemfile requires different version than your jekyll use:
```bash
bundle install
bundle exec jekyll server --watch
```

### Notes on wesite structure

- To add a new release version, edit `javascript` file
  [`/assets/javascripts/releases.js`](/assets/javascripts/releases.js)

- List of members is managed by `yaml` file
  [`_data/members.yml`](/_data/members.yml)


