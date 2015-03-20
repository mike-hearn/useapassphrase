## Why should I use a random passphrase?

Because humans are terrible at creating secure passwords. The [famous xkcd comic][1] got it right: humans have been trained to use <b>hard-to-remember</b> passwords that are <b>trivial</b> for computers to guess.

[1]: http://xkcd.com/936/

Try as we might, humans usually end up falling to predictable patterns when creating passwords. We create them based on things we can remember, such as names, locations, dates or just common English words. Then, we add some spice with a capital letter, some numbers, or a symbol.

Does your password fall into this group?

| Bad Password Patterns | Is It Memorable?  | Time To Crack  |
| ------------- |---------------| ------|
| A common word (example: `december`)| Yes. | 18 milliseconds <small>(Seriously. Try it in the box at the top.)</small> |
| An easily-typed spatial word (example: `qwerty` or `aaaaaaaa`)| Very much so. | 10 milliseconds |
| The family dog (example: `rusty`) | Yep. | 27 milliseconds |
| An important number, such as a date or zip code (example: `03261981`)| It's memorable to you, certainly. | 2.213 seconds |
| A word with trivial letter→number substitutions (example: `S4nfr4n`)| Sort of memorable, but you may forget which letters are substituted for numbers.| 639 milliseconds|

If your password resembles any of these examples, it is _instantly crackable._ Even a mix of these patterns, such as `[common word]+[number]` will be trivial to crack.

Compare those to a passphrase:

| Password Pattern | Is It Memorable?  | Time To Crack  |
| ------------- |---------------| ------|
| Four or more randomly chosen words (example: `mergers decade labeled manager`) | Type it a few times, and you'll have it committed to memory. | **6,000,126 centuries.** Give or take. |


## Is it really that easy to crack a password? How is it done, exactly?

The method for cracking is usually some variation on this method:

1. First, the hackers start with a bunch of wordlists. The [top 10,000 passwords][pwd] is a good place to start. Also, lists of all English words, all names, dates, and so on. In less than one second, [30% of all passwords would be cracked](https://xato.net/passwords/more-top-worst-passwords/).
2. After exhausting those wordlists, they will try all of the words again with common substitutions: capitalizing the first letter (`december` → `December`), making common letter-for-number swaps (`d3cemb3r`), and other common password variations.
3. Next, they start combining the previous wordlists. Name + date (`doug3251983`). Name + [separator] + date (`doug.3251983`).
4. Brute force, a.k.a. try every combination of characters. Try `a`, then `b`, then `c` ... eventually `aa`, `ab`, `ac`.

If your password is based on any kind of pattern, eventually using some combination of the above steps, it will be cracked.

Your best defense is using a truly random generator (like this site).

[pwd]: https://xato.net/passwords/more-top-worst-passwords/
[guesses]: http://arstechnica.com/security/2012/12/25-gpu-cluster-cracks-every-standard-windows-password-in-6-hours/

## I get it, simple passwords are cracked easily. But why should I use a random pass*phrase* instead of, say, `ipz2!az8k%0h`?

There are dozens of random password generators out there that will happily put together a bunch of random characters for you to use as a password. These random passwords are secure, but they're a huge pain to actually remember.

Random passphrases provide the best combination of **<u>memorability</u>** and **<u>security</u>**.

By way of example, here are two passwords with similar crackability:

|Password|Time to crack|
|--------|-------------|
|`p%9y#k&yFm?`| Approximately 90,182,663 centuries|
|`logic finite eager ratio`|Approximately 189,658,722 centuries|

Which would you rather remember?

## Fine, you've convinced me. I'll use a passphrase. What else can I do to increase my security?

The receipe for perfect password management is straightforward.

### 1. Use a password manager.

Firefox, Chrome, Safari and Internet Explorer all have built in password managers. But if you plan to use your passwords across devices, you probably should use one of these:

* [**1 Password**][1p] (Windows, Mac, iOS, Android)
* [**LastPass**][lp] (iOS, Android; Chrome plugin works on Windows, Mac, Linux)
* [**KeePass**][kp] (Linux, Windows, Mac, Android)

[1p]: https://agilebits.com/onepassword
[lp]: https://lastpass.com/
[kp]: http://keepass.info/

### 2. Use a strong master password for your password manager.

This is the perfect opportunity for a passphrase.

### 3. Use a different passphrase for every site.

<span style="color: #000;">belief romanian bridge profit</span>  
<span style="color: #333;">arts started bundle disease</span>  
<span style="color: #666;">delay gradual asset centers</span>  
<span style="color: #999;">keating post warburg johnson</span>  
<span style="color: #AAA;">efforts denying billed buy</span>  
<span style="color: #CCC;">whose category fonts mutual</span>  
<span style="color: #EEE;">easing autonomy weight five</span>

And so on.

## And now I'm getting my password from a website. That seems like a bad practice on its own. Is _this_ page secure?

Yes. This page makes <u>zero</u> calls to external sites or resources (check your network tab to verify). The images and javascript are all embedded.

Unless someone is looking over your shoulder, it's secure.

For extra security, this page is designed to run entirely offline: save this page to your hard drive, disconnect from the internet, and open it in a browser. This way you can assure that the passwords are not being transmitted anywhere.

## Thanks for reading, and stay secure!