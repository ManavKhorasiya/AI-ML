simple_chart_config = {
    chart: {
        container: "#tree-simple"
    },
    
    nodeStructure: {
        text: { name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING" },
        children: [
            {
                text: { name: "ACS" },
                image : "images/ACS/TEAM_PHOTO.jpg"
            },
            {
                text : { name :"AI Image Colorization"},
                image : "images/AI image colourization/TEAM_PHOTO.jpg"
                
            },
            {
                text : { name :"GISA"},
                image : "images/gisa.png"
                
            },
            {
                text : { name :"PLANet"},
                image : "images/planet.png"
                
            }
        ]
    }
};

var my_chart = new Treant(simple_chart_config);