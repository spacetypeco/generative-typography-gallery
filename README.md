# Quickstart

1. Follow the instructions to [install Jekyll](https://jekyllrb.com/docs/installation/).
2. Run `bundle install` to install this repository's dependencies.
3. Install [node](https://nodejs.org/en/).
3. Run `npm install pug -g`.

(students: feel free to reach out if something doesn't work)

## Running

After you have everything installed, in your terminal cd into the folder where the site is stored and run the following:

```
bundle exec jekyll serve --baseurl ''
```

This should give you the URL where the computer is running your site locally. View the site edits every time you refresh!

## Content Updates

All gallery items are pulled from individual markdown files in the `_projects` folder. Images link to `assets/img`. These are the only two images you need to change.

The about page copy is handled through `about.md`.

## Layout Updates

The gallery + about pages rely on the layouts in `_layouts`. These layouts rely on shared modules in `_includes`. You should make updates in these files if you're looking to shake things up.

CSS changes should go into `assets/css/extra.css`; JS changes should go into files within `assets/js/`.

## Pushing changes

When you're done making changes, go back to your terminal and generate the static website with this command:

```
bundle exec jekyll build -d docs
```

and push it up to Github:

```
git add -A
git commit -m "Update website"
git push origin main
```

# More Information 

## Directory Structure

```
└── _layouts       # page layouts
└── _includes      # page components
└── _projects      # project definitions in markdown
└── assets         # public assets (css, js, imgs)
└── index.md       # homepage
└── about.md       # about page
```

## Working structure

```
*.md
=> uses a layout in _layouts
   => uses components in _includes
```

Reusuable page components, such as the header, are defined in `_includes`. These page components are used as part of page layouts in `_layouts`.

When someone visits a page, the URL identifies which `*.md` file to use, such as index.md (for the homepage) or `about.md` for the about page. The markdown file refers to a layout, which tells us how to render the page.
