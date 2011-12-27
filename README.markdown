# About
Webzap is a simple, unobtrusive tool for pushing webpages from one device to another. The destination computer runs a lightweight HTTP server and source devices (e.g. laptops/phones/tablets) use a bookmarklet to send over the desired page.

Webzap is primarily an exercise for me play around with Git, responsive web design, bookmarklets, and Twitter's [Bootstrap](http://twitter.github.com/bootstrap/) toolkit. If you have ideas on how Webzap can be improved, however, I am more than happy to hear them.

# Getting started
Webzap can be installed and started by simply running the following command from a Unix prompt (it requires [easy_install](http://pypi.python.org/pypi/setuptools) and will use it to download [Flask](http://flask.pocoo.org/), so you may want to run it from inside a [virtualenv](http://pypi.python.org/pypi/virtualenv)):

```curl https://raw.github.com/irace/webzap/master/install.sh | bash```

After running, Webzap will be accessible at `http://hostname:5000`, where `hostname` is the computer running Webzap's name on the local network (e.g. `192.168.1.145`). Visit that address from your source device and follow the instructions to install the bookmarklet.

When viewing a page that you'd like to read later, choose the bookmarklet from your browser's bookmarks and it will be opened on the destination computer.

# License
Available for use under the MIT license: [http://bryan.mit-license.org](http://bryan.mit-license.org)