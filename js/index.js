var UserChoice = React.createClass({ displayName: "UserChoice",
  compareMethod: function compareMethod(choice) {
    this.props.compare(choice);
  },
  render: function render() {var _this = this;
    return (
      React.createElement("div", null,
      React.createElement("div", { className: "row" },
        React.createElement("h5", { className: "col s12 center-align" },
          React.createElement("span", { className: "title" }, "Make a choice:"), " ",
      React.createElement("div", { className: "row" },
          React.createElement("div", {
              id: 1,
              title: "Rock",
              className: "col s2 offset-s3 center-align",
              onClick: function onClick() {return _this.compareMethod("Rock");} },

            React.createElement("img", { src: "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-016-512.png", id: "img1" })),


          React.createElement("div", {
              id: 2,
              title: "Paper",
              className: "col s2 center-align",
              onClick: function onClick() {return _this.compareMethod("Paper");} },
    
            React.createElement("img", { src: "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-012-512.png", id: "img2" })),


          React.createElement("div", {
              id: 3,
              title: "Scissors",
              className: "col s2 center-align",
              onClick: function onClick() {return _this.compareMethod("Scissors");} },

            React.createElement("img", { src: "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-009-512.png", id: "img3" } )))))));
  } });


var ComputerChoice = React.createClass({ displayName: "ComputerChoice",
  render: function render() {
    return (
      React.createElement("div", null,
        React.createElement("br", null),
        React.createElement("div", { className: "row" },
          React.createElement("h5", { className: "col s12 center-align" },
            React.createElement("span", { className: "title" }, "Computer Chose:"), " ",
            this.props.computerChoice),
          React.createElement("div", { className: "row" },
          React.createElement("h5", { className: "col s12 center-align" },
            React.createElement("span", { className: "title" }, "Robot Chose:"), " ",
            this.props.userChoice)))));
  } });


var Result = React.createClass({ displayName: "Result",
  render: function render() {
    return (
      React.createElement("div", null,
        React.createElement("div", { className: "row" },
          React.createElement("h5", { className: "col s12 center-align" },
            React.createElement("span", { className: "title" }, "Result:"), " ", this.props.result))));
  } });


var Score = React.createClass({ displayName: "Score",
  render: function render() {
    return (
      React.createElement("div", null,
        React.createElement("br", null),
        React.createElement("div", { className: "scoreBox" },
          React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col s12 center-align" },
              React.createElement("h5", null,
                React.createElement("span", { className: "title" }, "Score")),

              React.createElement("br", null),
              React.createElement("div", { className: "row score" }, "Computer: ",
                this.props.gameScore.computerScore),

              React.createElement("div", { className: "row score" }, "You: ",
                this.props.gameScore.userScore))))));
  } });


var Application = React.createClass({ displayName: "Application",
  getInitialState: function getInitialState() {
    return {
      computerChoice: "",
      userChoice: "",
      result: "",
      winner: "",
      visible: false,
      score: {
        userScore: 0,
        computerScore: 0 } };
  },
  compare: function compare(choice1) {
    var choice2 = Math.random();
    var newScore =  this.state.score;
    if (choice2 >= 0 && choice2 <= 0.33) {
      choice2 = "Paper";
    } else if (choice2 >= 0.34 && choice2 <= 0.66) {
      choice2 = "Rock";
    } else choice2 = "Scissors";

    this.setState({
      userChoice: choice1,
      computerChoice: choice2 });


    if (choice1 === choice2) {
      this.setState({
        result: "Tie",
        winner: "",
        visible: true });

    } else {
      if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
          newScore.userScore = this.state.score.userScore + 1;
          newScore.computerScore = this.state.score.computerScore;
          this.setState({
            result: "You Win!",
            winner: "User",
            score: newScore,
            visible: true });

        } else {
          newScore.userScore = this.state.score.userScore;
          newScore.computerScore = this.state.score.computerScore + 1;
          this.setState({
            result: "Computer Wins",
            winner: "Computer",
            score: newScore,
            visible: true });

        }
      }

      if (choice1 === "Scissors") {
        if (choice2 === "Paper") {
          newScore.userScore = this.state.score.userScore + 1;
          newScore.computerScore = this.state.score.computerScore;
          this.setState({
            result: "Robot Wins!",
            winner: "User",
            score: newScore,
            visible: true });

        } else {
          newScore.userScore = this.state.score.userScore;
          newScore.computerScore = this.state.score.computerScore + 1;
          this.setState({
            result: "Computer Wins",
            winner: "Computer",
            score: newScore,
            visible: true });

        }
      }

      if (choice1 === "Paper") {
        if (choice2 === "Scissors") {
          newScore.userScore = this.state.score.userScore;
          newScore.computerScore = this.state.score.computerScore + 1;
          this.setState({
            result: "Computer Wins",
            winner: "Computer",
            score: newScore,
            visible: true });

        } else {
          newScore.userScore = this.state.score.userScore + 1;
          newScore.computerScore = this.state.score.computerScore;
          this.setState({
            result: "You Win!",
            winner: "User",
            score: newScore,
            visible: true });

        }
      }
    }
  },
  render: function render() {
    var showComputer, showResults;
    if (this.state.visible === true) {
      showComputer =
      React.createElement(ComputerChoice, { computerChoice: this.state.computerChoice, userChoice: this.state.userChoice });

      showResults =
      React.createElement(Result, { result: this.state.result, winner: this.state.winner });

    } else {
      showComputer = React.createElement("div", { className: "row addPadding" });
      showResults = React.createElement("div", { className: "row addPadding" });
    }
    return (
      React.createElement("div", { className: "container" },
        React.createElement("div", { className: "wrapper valign-wrapper" },
          React.createElement("div", { className: "valign center" },
            React.createElement(UserChoice, { compare: this.compare }),
            showComputer,
            showResults,
            React.createElement(Score, { gameScore: this.state.score })))));
  } });


React.render(React.createElement(Application, null), document.getElementById("app"));