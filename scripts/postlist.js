let myapp = angular.module('myapp', []);

myapp.controller('myappController', ['$scope', function ($scope) {
    $scope.previewlists = [
        {
            name: "Button effect 3",
            src: "https://code-architects.github.io/button-effect-3/",
            lang: "CSS"
        },
        {
            name: "Sibling Fade",
            src: "https://code-architects.github.io/sibling-fade/",
            lang: "CSS"
        },
        {
            name: "Typewriter Effect JS",
            src: "https://code-architects.github.io/typewriter-effect-js/",
            lang: "CSS JS"
        },
        {
            name: "Typewriter Effect CSS",
            src: "https://code-architects.github.io/typewriter-effect-css/",
            lang: "CSS"
        },
        {
            name: "Gradient Border",
            src: "https://code-architects.github.io/gradient-border/",
            lang: "CSS"
        },
        {
            name: "Button effect 1",
            src: "https://code-architects.github.io/button-effect-1/",
            lang: "CSS"
        },
        {
            name: "Gradient Background Animation",
            src: "https://code-architects.github.io/gradient-background-animation/",
            lang: "CSS"
        },
        {
            name: "3D Button",
            src: "https://code-architects.github.io/3d-button/",
            lang: "CSS"
        },
        {
            name: "Create Multiple Borders",
            src: "https://code-architects.github.io/create-multiple-borders/",
            lang: "CSS"
        },
        {
            name: "Generate Strong Password",
            src: "https://code-architects.github.io/generate-strong-password/",
            lang: "JS"
        },
        {
            name: "Text Selection",
            src: "https://code-architects.github.io/text-selection/",
            lang: "CSS"
        },
        {
            name: "Loading Animation",
            src: "https://code-architects.github.io/loading-animation/",
            lang: "CSS"
        },
        {
            name: "Countdown Timer",
            src: "https://code-architects.github.io/countdown-timer/",
            lang: "CSS JS"
        },
        {
            name: "Create Ribbon",
            src: "https://code-architects.github.io/create-ribbon/",
            lang: "CSS"
        },
        {
            name: "Scroll to Top",
            src: "https://code-architects.github.io/scroll-to-top/",
            lang: "CSS JS"
        },
        {
            name: "Parallax Scrolling",
            src: "https://code-architects.github.io/parallax-scrolling/",
            lang: "CSS"
        },
        {
            name: "Text to Speech",
            src: "https://code-architects.github.io/text-to-speech/",
            lang: "JS"
        },
        {
            name: "Baffle Text",
            src: "https://code-architects.github.io/baffle-text/",
            lang: "JS"
        },
        {
            name: "Card Hover effect",
            src: "https://code-architects.github.io/card-hover-effect/",
            lang: "CSS"
        },
        {
            name: "Creative skew border",
            src: "https://code-architects.github.io/creative-skew-border/",
            lang: "CSS"
        },
        {
            name: "Pure CSS text Animation",
            src: "https://code-architects.github.io/pure-css-text-animation/",
            lang: "CSS"
        },
        {
            name: "Stop form Refreshing page on Submit",
            src: "https://code-architects.github.io/stop-form-refreshing-page-on-submit/",
            lang: "CSS JS"
        },
        {
            name: "Show/Hide Password",
            src: "https://code-architects.github.io/show-hide-password/",
            lang: "CSS JS"
        },
        {
            name: "3D Cube",
            src: "https://code-architects.github.io/3d-cube/",
            lang: "CSS"
        },
        {
            name: "Typewriter Effect plugin",
            src: "https://code-architects.github.io/typewriter-effect-plugin/",
            lang: "JS"
        },
        {
            name: "Generate random HEX color",
            src: "https://code-architects.github.io/generate-random-hex-color/",
            lang: "JS"
        },
        {
            name: "Stretch Text",
            src: "https://code-architects.github.io/stretch-text/",
            lang: "CSS"
        },
        {
            name: "Rock, Paper & Scissors",
            src: "https://code-architects.github.io/Rock-Paper-Scissors/",
            lang: "JS"
        },
        {
            name: "404 Page not found",
            src: "https://code-architects.github.io/404-page-not-found/",
            lang: "CSS"
        },
        {
            name: "Text Reflection",
            src: "https://code-architects.github.io/text-reflection/",
            lang: "CSS"
        },
        {
            name: "Stopwatch",
            src: "https://code-architects.github.io/stopwatch/",
            lang: "JS"
        },
        {
            name: "To Do List",
            src: "https://code-architects.github.io/To-Do-list/",
            lang: "JS"
        },
        {
            name: "Text Flip",
            src: "https://code-architects.github.io/text-flip",
            lang: "CSS"
        },
        {
            name: "Shrink Navbar on Scroll",
            src: "https://code-architects.github.io/Shrink-Navbar-on-Scroll/",
            lang: "CSS JS"
        },
        {
            name: "Neon Button",
            src: "https://code-architects.github.io/neon-button/",
            lang: "CSS"
        },
        {
            name: "Float Input label",
            src: "https://code-architects.github.io/float-input-label/",
            lang: "CSS"
        },
        {
            name: "Skew Border",
            src: "https://code-architects.github.io/skew-header/",
            lang: "CSS"
        },
        {
            name: "Simple Navbar",
            src: "https://code-architects.github.io/simple-navbar/",
            lang: "CSS"
        },
        {
            name: "Button Notification Badge",
            src: "https://code-architects.github.io/button-notfication-badge/",
            lang: "CSS"   
        },
        {
            name: "Simple Profile Card",
            src: "https://code-architects.github.io/simple-profile-card/",
            lang: "CSS"   
        },
        {
            name: "Social Media Buttons",
            src: "https://code-architects.github.io/social-media-buttons/",
            lang: "CSS"
        },
        {
            name: "Animate Element on Scroll",
            src: "https://code-architects.github.io/animate-element-on-scroll/",
            lang: "CSS"
        },
        {
            name: "Video as a Background",
            src: "https://code-architects.github.io/Video-as-a-Background/",
            lang: "CSS"
        },
        {
            name: "Video Full Screen",
            src: "https://code-architects.github.io/Video-full-screen/",
            lang: "JS"
        },
        {
            name: "Chuck Norries Jokes Generator",
            src: "https://code-architects.github.io/chuck-norris-joke-generator/",
            lang: "JS"
        },
        {
            name: "Dot Loader",
            src: "https://code-architects.github.io/dot-loader/",
            lang: "CSS"
        },
        {
            name: "Infinite Scrolling",
            src: "https://code-architects.github.io/infinite-scrolling/",
            lang: "JS"
        },
        {
            name: "TinyMCE Plugin",
            src: "https://code-architects.github.io/tinymce-editor/",
            lang: "JS"
        },
        {
            name: "Image Special Effect",
            src: "https://code-architects.github.io/image-special-effect/",
            lang: "CSS"
        },
        {
            name: "Copy text to clip board",
            src: "https://code-architects.github.io/copy-text-to-clipboard/",
            lang: "CSS"
        },
        {
            name: "Google UI Clone",
            src: "https://code-architects.github.io/google-clone/",
            lang: "CSS"
        }
    ];
}]);
