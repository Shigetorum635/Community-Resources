Game.on("chat", async (player, message) => {
    if (player.admin){
        Game.messageAll("[BH Admin] "+ player.username+ ": "+ message)
    }
    // Change == 1 with your own id
    else if (player.userId === 1){
        Game.messageAll("[I am Someone!]"+ player.username+": "+message)

    }
    else {
        Game.messageAll("[IM not important]"+player.username+": "+message)
    }
});
