# Use A Passphrase (.com)

This site is intended to both generate simple passphrases as well as advocate
for the use of random passphrases over human-generated passwords.

# How to Contribute

This site needs a lot of work. Please contribute to any of the following:

* To improving the persuasiveness of the argument, which is all contained in
  `passphrase_advocate.md`.
* To the wordlist from which the passwords are generated, which is contained in `js/wordlist.js`
* Add additional password possibilities (e.g. four-word-with-space).

# Running It Locally

It requires grunt-cli (`npm install -g grunt-cli`), after which you can just
run `npm install` and then `grunt`.

If you have Docker & Docker Compose installed, you should theoretically just be
able to run `docker-compose up` to build the /dist directory, which will create
the index.html file that is entirely self-contained (i.e. it makes no external
calls).
