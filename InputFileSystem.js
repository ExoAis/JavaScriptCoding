const chalk=require("chalk")
const yargs=require("yargs")
yargs.version("1.0.1")
yargs.command({
    command:'Add',
    describe:'Adding a note',
    builder: {
        title: {
            describe: "Adding a note",
            demandOption: true,
            type: 'string'
        },
        name: {
            describe: "Adding name",
            demandOption: true,
            type: "string"
        }
    },
    handler:function(argv) {
        console.log("Title: "+argv.title)
        console.log("Name: "+argv.name)
    }
})
yargs.command({
    command: "Remove",
    describe: "Removing a note",
    handler:function() {
        console.log("Removing the note!")
    }
})
yargs.command({
    command: "Remove",
    describe: "Removing a note",
    handler:function() {
        console.log("Removing the note!")
    }
})
yargs.command({
    command: "List",
    describe: "Listing a note",
    handler:function() {
        console.log("Listing the note!")
    }
})
yargs.command({
    command: "Read",
    describe: "Reading a note",
    handler:function() {
        console.log("Reading the note!")
    }
})
yargs.parse()