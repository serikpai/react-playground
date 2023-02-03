import {render, screen} from '@testing-library/react';
import {TaskItem} from './TaskItem';

test("empty item must not crash", () => {

    const t = {
        name: "foo"
    }

    render(<TaskItem task={t}></TaskItem>)

    const e = screen.getByRole(/foo/i);

    expect(e).toBeInTheDocument();

});