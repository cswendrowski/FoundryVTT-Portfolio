import PortfolioTour from "./PortfolioTour.mjs";
import ChatMessageHandler from "./ChatMessageHandler.mjs";

Hooks.on("ready", () => {

    game.settings.register("cswendrowski", "tourCompleted", {
        name: "Tour Completed",
        scope: 'client',
        config: false,
        type: Boolean,
        default: false
    });

    game.npcChatter.randomGlobalChatterEvery(5000);

    let tour = new PortfolioTour();
    window.game.tour = tour;
    window.game.dragged = false;
    tour.start();

});

Hooks.on("renderSettings", (app, html) => {

    // Add button to Reset Tours
    let players = html.find("button[data-action='players']");
    $(`<button data-action="resettours"><i class="fas fa-hiking" aria-hidden="true"></i>Reset Tour</button>`).insertAfter(players);
    html.find('button[data-action="resettours"]').click(ev => {
      game.settings.set("cswendrowski", "tourCompleted", false);
      location.reload();
    });

});

Hooks.on("dragDropPositioning", async () => {
    if (window.game.dragged) return;
    window.game.dragged = true;
    await delay(4000);
    await ChatMessageHandler.sendMessageAsCody("Nice! Next up, ViNo - Visual Novel for Foundry. ViNo was the module that finally convinced me to setup a Patreon!");
    await delay(9000);
    await ChatMessageHandler.sendMessageAsCody("It brings actors - and their often wonderful art - into prime real estate, and features tons of reading speed configuration.");
    await delay(10000);
    await ChatMessageHandler.sendMessageAsCody("As the module with the longest development schedule, it's my cleanest code (but still, ultimately, night-programming quality). Check it out here: https://github.com/cswendrowski/FoundryVTT-ViNo/tree/master/scripts");
    await delay(12000);
    await ChatMessageHandler.sendMessageAsCody("ViNo is one of many modules that benefits from the next module in the tour - Tabbed Chatlog");
    await delay(14000);
    window.game.tour.dragUploadComplete();
});

const delay = ms => new Promise(res => setTimeout(res, ms));