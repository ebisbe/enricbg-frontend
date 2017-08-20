<template>
    <div id="page-wrapper">

        <!-- Wrapper -->
        <div id="wrapper">

            <!-- Panel (Banner) -->
            <section class="panel banner right">
                <div class="content color0 span-3-75">
                    <h1 class="major">Hello, my name<br/>
                        is Enric</h1>
                    <p>I'm a freelance <strong>Full-stack Developer</strong> with expertise in Laravel, MySQL, MongoDB,
                        Vue.js and TDD. I'm also passionate about new ideas or concepts involving development like
                        Serverless. </p>
                    <ul class="actions">
                        <li><a href="#first" class="button special color1 circle icon fa-angle-right">Next</a></li>
                    </ul>
                </div>
                <div class="image filtered span-1-75" data-position="25% 25%">
                    <img src="/static/lily.jpg" alt=""/>
                </div>
            </section>

            <!-- Panel (Spotlight) -->
            <section class="panel spotlight medium left" id="first">
                <div class="content span-7">
                    <h2 class="major">My work</h2>
                    <p>I work from home with my own schedule. I use always the Pomodoro technique to focus on what I'm
                        doing and keeping track of every hour I spent working. In the past I worked with vagrant and now
                        I have my main project under docker containers to be able to have a Continuous integration
                        deployment with all tests. <br> I'm always trying to improve in some way like mastering Vi and
                        Git or learning Serverless . </p>
                </div>
                <div class="image filtered tinted" data-position="top left">
                    <img src="/static/green-little-bee-eater.jpg" alt="Senegal green little bee eater bird"/>
                </div>
            </section>

            <!-- Panel -->
            <section class="panel color1">
                <div class="intro joined">
                    <h2 class="major">My self</h2>
                    <p>I love the balance in my life that travelling, photography, friends (with some beers), sports and
                        programming brings to myself.</p>
                </div>
                <div class="inner">
                    <ul class="grid-icons three connected">
                        <li><span class="icon fa-balance-scale"><span class="label">Balance in life</span></span></li>
                        <li><span class="icon fa-map-o "><span class="label">Travel with an empty map</span></span></li>
                        <li><span class="icon fa-camera-retro"><span class="label">Photography</span></span></li>
                        <li><span class="icon fa-beer"><span class="label">Friends and beers, beers and friends. It's the same.</span></span>
                        </li>
                        <li><span class="icon fa-bicycle"><span class="label">Sporty life</span></span></li>
                        <li><span class="icon fa-code"><span class="label">Programming enthusiast</span></span></li>
                    </ul>
                </div>
            </section>

            <!-- Panel (Spotlight) -->
            <section class="panel spotlight large right">
                <div class="content span-5">
                    <h2 class="major">My future</h2>
                    <p>I don't know everything and I'm really fine with that. But I'm not scared to take a step in any
                        direction I think it will be worth for me and learn anything from scratch. I don't want to go every
                        morning into a soulless office and spend there my day, therefore I'm writing my own future.</p>
                </div>
                <div class="image filtered tinted" data-position="top right">
                    <img src="/static/mandala.jpg" alt=""/>
                </div>
            </section>

            <!-- Panel -->
            <section class="panel">
                <div class="intro color2">
                    <h2 class="major">My photography</h2>
                    <p>Enjoy my photos as much as I do shooting them. I like to go around with my camera while traveling
                        or just hiking in the mountains.
                        <br>Checkout my photos at <a href="https://www.flickr.com/photos/enric-bisbe" target="_blank">Flickr
                            Photos</a></p>
                </div>
                <gallery></gallery>
            </section>

            <!-- Panel -->
            <section class="panel color4-alt">
                <div class="intro color4">
                    <h2 class="major">My contact</h2>
                    <p>If you want to share some ideas or hire me write a message. <br> Say just Hi!
                        if you are shy. I won't bite. </p>
                </div>
                <div class="inner columns divided">
                    <contact></contact>
                    <div class="span-1-5">
                        <h2 class="major">Follow me</h2>

                        <ul class="contact-icons color1">
                            <li class="icon fa-linkedin"><a
                                    href="https://www.linkedin.com/in/enric-bisbe-gil-a2742831/" target="_blank">Enric
                                Bisbe Gil</a>
                            </li>
                            <li class="icon fa-flickr"><a href="https://www.flickr.com/photos/enric-bisbe"
                                                          target="_blank">Enric Bisbe
                                Gil</a></li>
                            <li class="icon fa-instagram"><a href="https://www.instagram.com/nricu/" target="_blank">@nricu</a>
                            </li>
                            <li class="icon fa-twitter"><a href="https://twitter.com/NricU" target="_blank">@NricU</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Copyright -->
            <div class="copyright">&copy; Enric Bisbe Gil. Design: <a href="https://html5up.net" rel="nofollow">HTML5
                UP</a>.
            </div>

        </div>

    </div>
</template>

<script>
  import Contact from './components/Contact'
  import Gallery from './components/Gallery'

  export default {
    name: 'app',
    components: {
      Contact, Gallery
    },
    mounted () {
      this.$ua.trackView('Home')
    }
  }
</script>
