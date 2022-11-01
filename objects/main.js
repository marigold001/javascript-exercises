const student = {
  name: "Neven",
  sclass: "WBD",
  rollno: 27,
};

for (key in student) {
  console.log(key);
}

const inverted = {};

for (key in student) {
  inverted[student[key]] = key;
}
console.log(inverted);

const list = document.querySelector("ul");
const phones = {
  manufacturers: {
    iphone: [
      {
        model: "Iphone 14 QuadCam",
        colors: ["black", "white", "blue"],
        OS: "v8",
      },
      {
        model: "Iphone 15 QuadCam",
        colors: ["black", "white", "blue"],
        OS: "v9",
      },
      {
        model: "Iphone 16 QuadCam",
        colors: ["black", "white", "blue"],
        OS: "v10",
      },
    ],
    xiaomi: [
      {
        model: "RedMi Note 9 PRO",
        colors: ["black", "white", "blue"],
        OS: "v8",
      },
      {
        model: "RedMi Note 10 PRO",
        colors: ["black", "white", "blue"],
        OS: "v9",
      },
      {
        model: "RedMi Note 11 Pro",
        colors: ["black", "white", "blue"],
        OS: "v10",
      },
    ],
    samsung: [
      {
        model: "Galaxy A04 Seamless",
        colors: ["black", "white", "blue"],
        OS: "v8",
      },
      {
        model: "Galaxy A13 Seamless",
        colors: ["black", "white", "blue"],
        OS: "v9",
      },
      {
        model: "Galaxy V20 Seamless",
        colors: ["black", "white", "blue"],
        OS: "v10",
      },
    ],
  },
  listManufacturers() {
    let manufacturer = prompt(
      "Enter a manufacturer to get information about their models. Available manufacturers Samsung, Iphone, and Xiaomi."
    );
    if (manufacturer.toLowerCase() == "samsung") {
      const samsung = this.manufacturers.samsung;
      for (phone in samsung) {
        let item = document.createElement("li");
        let content = document.createTextNode(
          "Model: " +
            samsung[phone].model +
            " - Colors: " +
            samsung[phone].colors +
            " - OS:" +
            samsung[phone].OS
        );
        item.appendChild(content);
        list.appendChild(item);
      }
    } else if (manufacturer.toLowerCase() == "iphone") {
      const iphone = this.manufacturers.iphone;
      for (phone in iphone) {
        const item = document.createElement("li");
        const content = document.createTextNode(
          "Model: " +
            iphone[phone].model +
            " - Colors: " +
            iphone[phone].colors +
            " - OS:" +
            iphone[phone].OS
        );
        item.appendChild(content);
        list.appendChild(item);
      }
    } else if (manufacturer.toLowerCase() == "xiaomi") {
      const xiaomi = this.manufacturers.xiaomi;
      for (phone in xiaomi) {
        const item = document.createElement("li");
        const content = document.createTextNode(
          "Model: " +
            xiaomi[phone].model +
            " - Colors: " +
            xiaomi[phone].colors +
            " - OS:" +
            xiaomi[phone].OS
        );
        item.appendChild(content);
        list.appendChild(item);
      }
    }
  },
};

phones.listManufacturers();
