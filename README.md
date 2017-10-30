# NOAF Site

This repo is for sharing code related to the NOAF site redesign for the
Abortion Access Hackathon 2017 in NYC.

See `assets_from_fund/` for resources provided from the fund.

See `codebase/` for code we wrote over the course of the weekend.

## To set up

```
cd codebase/
npm install -g gulp
npm install
gulp
# visit localhost:8080 in your browser!
```

## What's in the box? 

### Codebase

We have a bunch of scss that compiles into regular css. Make changes in `codebase/scss`. If you're adding new modules, make sure to import them in `codebase/scss/style.scss`!

#### Deploying

Run the gulp server, visit the localhost, then copy and paste the contents of `codebase/assets/css/style.css` into the squarespace custom CSS box. (No kidding!)

### Assets from fund

Notes and content from hackathon weekend.

### Designs

Master design documents.

## Contact

hit up @colinxfleming.
