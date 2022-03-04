import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [active] = useState("")
    const history = useHistory()

    useEffect( //event listener. When state changes, run this function
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                    .then((employeeArray) => {
                        setEmployees(employeeArray)
                    })
        },
        []
    )

    return (
        <>
        <button onClick={() => history.push("/employees/create")}>Add New Employee</button>
        { active }
            <h2>Employees</h2>
            {
                employees.map(
                    (employeeObject) => {
                        return <div><h3>{employeeObject.address}</h3>
                            <li>Name: {employeeObject.name}</li>
                            <li>Store: {employeeObject.location.address}</li>
                            <li>Manager: {employeeObject.manager ? "yes" : "no"}</li>
                            <li>Full time: {employeeObject.fullTime ? "yes" : "no"}</li>
                            <li>Hourly rate: {employeeObject.hourlyWage}</li>
                        </div>
                    }
                )
            }
        </>
    )
}