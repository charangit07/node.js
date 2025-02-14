let emp={
    eid:101,
    ename:"Rahul",
    esal:45000.45
}
emp.esal = 55000.55;
emp.email="Rahul@pm.com"
console.log(emp)
delete emp.esal
console.log(emp)