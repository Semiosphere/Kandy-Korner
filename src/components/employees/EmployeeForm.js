import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {

    const [employee, updateEmployee] = useState({
        name: "",
        locationId: 1,
        manager: false,
        hourlyWage: 1,
        fullTime: false
    })

    const history = useHistory()

    const submitEmployee = (evt) => {
        evt.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: 1,
            manager: employee.manager,
            hourlyWage: employee.hourlyWage,
            fullTime: employee.fullTime
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        
            <form className="employeeForm">
                <h2 className="employeeForm__title">Hire New Employee</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">New Hire Name: </label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = {...employee}
                                    copy.name = evt.target.value
                                    updateEmployee(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Fill in new hire's full name"
                             />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Manager: </label>
                        <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.manager = evt.target.checked
                                updateEmployee(copy)
                            }
                        }
                            type="checkbox" />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Hourly Pay: </label>
                        <input
                            onChange={
                                (evt) => {
                                    const copy = {...employee}
                                    copy.hourlyWage = evt.target.value
                                    updateEmployee(copy)
                                }
                            }
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Fill in new hire's hourly rate"
                             />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Full-time: </label>
                        <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fullTime = evt.target.checked
                                updateEmployee(copy)
                            }
                        }
                            type="checkbox" />
                    </div>
                </fieldset>
                <button onClick={submitEmployee} className="btn btn-primary">
                    Add Employee to System
                </button>
            </form>
        
    )
}