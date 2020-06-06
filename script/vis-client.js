const COLOR_GREY = "#d6dbdf";
const COLOR_RED = "#f5b7b1";
const COLOR_GREEN = "#abebc6";
const COLOR_BLUE = "#aed6f1";
const COLOR_YELLOW = "#fcf3cf";
const COLOR_PURPLE = "#d2b4de";

const NODE_COLOR_LANGUAGE = COLOR_PURPLE;
const NODE_COLOR_PROJECT = "#aed6f1";
const NODE_COLOR_DEVELOPER = "#f5b7b1";
const NODE_COLOR_TECHNOLOGY = "#abebc6";

const EDGE_TYPE_LANGUAGE = "language"

function startVis() {

    var nodes = new vis.DataSet([
      { id: "project-Tunturi", label: "Tunturi", color: NODE_COLOR_PROJECT, fontcolor: "black" },
      { id: "project-TunturiDroid", label: "TunturiDroid", color: NODE_COLOR_PROJECT },
      { id: "project-AglPython", label: "AglPython", color: NODE_COLOR_PROJECT },
      { id: "project-algalopez.github.io", label: "algalopez.github.io", color: NODE_COLOR_PROJECT },
      { id: "project-arduinoSignals", label: "ArduinoSignals", color: NODE_COLOR_PROJECT },
      { id: "project-happyday", label: "HappyDay", color: NODE_COLOR_PROJECT },
      { id: "language-Java", label: "Java", color: NODE_COLOR_LANGUAGE },
      { id: "language-Kotlin", label: "Kotlin", color: NODE_COLOR_LANGUAGE },
      { id: "language-Python", label: "Python", color: NODE_COLOR_LANGUAGE },
      { id: "language-HTML-CSS", label: "HTML-CSS", color: NODE_COLOR_LANGUAGE },
      { id: "language-Javascript", label: "Javascript", color: NODE_COLOR_LANGUAGE },
      { id: "language-C", label: "C", color: NODE_COLOR_LANGUAGE },
      { id: "developer-algalopez", label: "algalopez", color: NODE_COLOR_DEVELOPER },
      { id: "technology-SpringBoot", label: "SpringBoot", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-Flyway", label: "Flyway", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-MariaDB", label: "MariaDB", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-Bootstrap", label: "Bootstrap", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-Koin", label: "Koin", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-Room", label: "Room", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-IR-Emitter", label: "IR-Emitter", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-RF-Emitter", label: "RoRF-Emitterom", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-DHT11", label: "DHT11", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-JSF", label: "JSF", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-Maven", label: "Maven", color: NODE_COLOR_TECHNOLOGY },
      { id: "technology-Gradle", label: "Gradle", color: NODE_COLOR_TECHNOLOGY },
    ]);
  
    var edges = new vis.DataSet([
      { from: "developer-algalopez", to: "project-Tunturi", dashes: true , label: "Server" },
      { from: "developer-algalopez", to: "project-TunturiDroid", dashes: true , label: "Android" },
      { from: "developer-algalopez", to: "project-AglPython", dashes: true, label: "Client" },
      { from: "developer-algalopez", to: "project-algalopez.github.io", dashes: true, label: "Web" },
      { from: "developer-algalopez", to: "project-arduinoSignals", dashes: true, label: "Arduino" },
      { from: "developer-algalopez", to: "project-happyday", dashes: true, label: "Server+Web" },
      { from: "project-Tunturi", to: "language-Java" },
      { from: "project-Tunturi", to: "technology-SpringBoot" },
      { from: "project-Tunturi", to: "technology-Flyway"},
      { from: "project-Tunturi", to: "technology-MariaDB"},
      { from: "project-Tunturi", to: "technology-Gradle"},
      { from: "project-TunturiDroid", to: "language-Kotlin" },
      { from: "project-TunturiDroid", to: "technology-Koin" },
      { from: "project-TunturiDroid", to: "technology-Room" },
      { from: "project-TunturiDroid", to: "technology-Gradle"},
      { from: "project-AglPython", to: "language-Python" },
      { from: "project-algalopez.github.io", to: "language-Python" },
      { from: "project-algalopez.github.io", to: "language-HTML-CSS" },
      { from: "project-algalopez.github.io", to: "language-Javascript" },
      { from: "project-algalopez.github.io", to: "technology-Bootstrap" },
      { from: "project-arduinoSignals", to: "language-C" },
      { from: "project-arduinoSignals", to: "technology-IR-Emitter" },
      { from: "project-arduinoSignals", to: "technology-RF-Emitter" },
      { from: "project-arduinoSignals", to: "technology-DHT11" },
      { from: "project-happyday", to: "language-Java" },
      { from: "project-happyday", to: "language-HTML-CSS" },
      { from: "project-happyday", to: "technology-JSF" },
      { from: "project-happyday", to: "technology-MariaDB" },
      { from: "project-happyday", to: "technology-Maven" },
    ]);
  
    var container = document.getElementById("search-content");
    var data = {
      nodes: nodes,
      edges: edges,
    };
    var options = {};
    var network = new vis.Network(container, data, options);
  }
