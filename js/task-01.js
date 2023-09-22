const listEl = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item");
const categoryEl = document.querySelectorAll("h2");

const giveMeSoulFun = (number) => {
    return Array.from(categoryEl)[number].textContent;
}
const giveMeBody = (number) => {
    return Array.from(itemEl)[number].lastElementChild.children.length;
};

console.log(`Number of categories: ${Array.from(listEl.children).length}`);
console.log(``);
console.log(`Category: ${giveMeSoulFun(0)}`)
console.log(`Elements: ${giveMeBody(0)}`);
console.log(``);
console.log(`Category: ${giveMeSoulFun(1)}`)
console.log(`Elements ${giveMeBody(0)}`);
console.log(``);
console.log(`Category: ${giveMeSoulFun(2)}`)
console.log(`Elements: ${giveMeBody(0)}`);
