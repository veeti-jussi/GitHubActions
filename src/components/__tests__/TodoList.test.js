import { render, screen, cleanup } from '@testing-library/react';
import TodoList from '../Todolist';

test('should render TodoList component', () => {
    render(<TodoList/>);
    const todoListElement = screen.getByTestId('todo-list');
    expect(todoListElement).toBeInTheDocument();
});