import { render } from "@testing-library/react"
import TaskList from "./TaskList.backup"
import React from "react"

// 0 - Renderiza el componente
test('0 - Renderiza el componente', () => {
    const view = render(<TaskList />);
    expect(view).toBeDefined();
})