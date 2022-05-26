function greeting (name:string) {
    console.log("Hello " + name );
}

greeting(`George`);

let names = ['Chudi', 'Oge', "Ade", 'Sobe'];
names.forEach((element, index)=>{
    console.log(index + 1 + "." + element);
})