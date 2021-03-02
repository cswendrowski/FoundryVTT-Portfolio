export default class PortfolioTour {
    constructor() {
        let tour = introJs()
        let windowOpened = false;

        tour.onexit(function() {
            game.settings.set("cswendrowski", "tourCompleted", true);
        });
        tour.oncomplete(function() {
            game.settings.set("cswendrowski", "tourCompleted", true);
        });

        tour.onbeforechange(function(targetElement) {
            let currentStep = tour._currentStep;
            if (currentStep == 3) {
                if (!windowOpened) {
                    window.open('https://i.imgur.com/bQjTnsh.jpeg', 'myWindows', 'width=800,height=600');
                }
                windowOpened = true;
            }
            else if (currentStep == 5) {
                new Roll("d20").roll().toMessage();
            }
            else if (currentStep == 7) {
                $(".dungeon-moon-launcher").click();

            }
            else if (currentStep == 8) {
                $(".close").click();
                window.open("https://www.foundryvtt-hub.com/packages/?sort_order=_sfm_installs+desc+num&_sfm_author=Cody+Swendrowski", 'myWindows');
            }
        });

        tour.onafterchange(function(targetElement) {
            let currentStep = tour._currentStep;
            if (currentStep == 6) {
                $(".fa-fist-raised").click();
            }
        });

        tour.setOption('tooltipPosition', 'auto');
        tour.setOption('positionPrecedence', ['right', 'left', 'top', 'bottom']);
        tour.setOption('showProgress', true);

        tour.setOptions({
            steps: [
                { // 0
                    intro: "Welcome! This tour will serve as your guide through my portfolio. If you would like to restart it, you can find a button to do so in Settings"
                },
                { // 1
                    intro: "By day, I create modern GraphQL API's that support a React frontend, aimed at giving financial customers a way to interact with their data on something a bit easier to use than mainframe greenscreens"
                },
                { // 2
                    intro: "Nights and weekends, I run Iron Moose Development, a software company that is now focused on FoundryVTT module development. We've built quite a few modules - let's take a tour of some of them!"
                },
                { // 3
                    intro: "First up, Drag Upload! Nath commissioned me for this one in particular, and it is installed in 1 out of every 5 worlds on the Forge. It reads the file feed from a Drag event, and if it's something it can handle, creates it based on the current active layer. Otherwise, it passes on to Foundry for handling. Go ahead and click off the tour and drag in the Image that just opened in a new window - the tour will resume after!"
                },
                { // 4
                    element: document.querySelector('.ic'),
                    intro: "Tabbed Chatlog splits up the Chatlog into, well, tabs! Since the module knows what tab the user is currently in, it can default to In-Character and Out of Character chat automatically based on viewed tab"
                },
                { // 5
                    element: document.querySelector('.rolls'),
                    intro: "Notifications are shown to keep a user updated on when new content is available. Tabbed Chat also has options to store IC / Rolls per-scene, and to dump them to Discord"
                },
                { // 6
                    intro: "Last in our tour is probably the strangest one - Dungeon Moon!"
                },
                { // 7
                    intro: "🌑Dungeon Moon is a Vue powered Application tightly integrated with Foundry. It loads all Actors from Compendiums and the World to let a GM search and build a fair encounter per their system's rules."
                },
                { // 8
                    intro: "These were just some of the 19 packages I've developed or worked on, including this system, 13th Age! Developing add-ons for the incredible community of Foundry users has been the highlight of my last year, and it brings me great joy to see how much that community has grown."
                },
                { // 9
                    intro: "Thanks for taking the time to check out the things I've done. Feel free to play around with the world - all my modules are installed, and these are some of the maps I've made. I look forward to hearing back!"
                },
            ]
        });

        this.tour = tour;
    }

    start() {
        this.tour.start();
    }

    async dragUploadComplete() {
        await this.delay(1000);
        this.tour.goToStep(4).start();
    }

    delay = ms => new Promise(res => setTimeout(res, ms));
}
