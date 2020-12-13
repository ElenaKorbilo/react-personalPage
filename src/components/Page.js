import React, { Component } from "react";

export default class Page extends Component {
  state = {
    surnameState: "",
    nameState: "",
    secondNameState: "",
    phoneState: "",
    emailState: "",
    cityState: ""
  };

  render() {
    const handleSubmit = e => {
      e.preventDefault();
      alert("Сохранено");
    };

    const handleReset = () => {
      this.setState({
        surnameState: "",
        nameState: "",
        secondNameState: "",
        phoneState: "",
        emailState: "",
        cityState: ""
      });
    };

    const handleChangeSurname = e => {
      this.setState({ surnameState: e.target.value });
    };

    const handleChangeName = e => {
      this.setState({ nameState: e.target.value });
    };

    const handleChangeSecondName = e => {
      this.setState({ secondNameState: e.target.value });
    };

    const handleChangePhone = e => {
      this.setState({ phoneState: e.target.value });
    };

    const handleChangeEmail = e => {
      this.setState({ emailState: e.target.value });
    };

    const handleChangeCity = e => {
      this.setState({ cityState: e.target.value });
    };

    return (
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <h2>Персональная информация:</h2>
        Фамилия:{" "}
        <input
          type="text"
          value={this.state.surnameState}
          onChange={handleChangeSurname}
          required
          name="surname"
          id="surname"
        />
        <br />
        Имя:{" "}
        <input
          type="text"
          value={this.state.nameState}
          onChange={handleChangeName}
          required
          name="name"
          id="name"
        />
        <br />
        Отчество:{" "}
        <input
          type="text"
          value={this.state.secondNameState}
          onChange={handleChangeSecondName}
          required
          name="secondName"
          id="secondName"
        />
        <br />
        Телефон:{" "}
        <input
          type="text"
          value={this.state.phoneState}
          onChange={handleChangePhone}
          required
          name="phone"
          id="phone"
        />
        <br />
        Email:{" "}
        <input
          type="email"
          value={this.state.emailState}
          onChange={handleChangeEmail}
          required
          name="email"
          id="email"
        />
        <br />
        Город:{" "}
        <input
          type="text"
          value={this.state.cityState}
          onChange={handleChangeCity}
          required
          name="city"
          id="city"
        />
        <br />
        <button type="submit">Сохранить</button>
        <button type="reset">Сбросить</button>
      </form>
    );
  }
}
