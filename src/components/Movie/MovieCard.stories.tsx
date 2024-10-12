import type { Meta, StoryObj } from '@storybook/react';
import MovieCard from './MovieCard';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

const meta: Meta<typeof MovieCard> = {
    component: MovieCard,
    decorators: [withRouter],
    parameters: {
        reactRouter: reactRouterParameters({}),
    },
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const Primary: Story = {
    args: {
        movie: {
            id: 917496,
            title: 'Beetlejuice Beetlejuice',
            vote_average: 7.202,
            release_date: "2024-09-04",
            overview: "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Betelgeuse, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
            genre_ids: [35,14, 27],
            poster_path: "/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg"
        }
    },
    parameters: {
        layout: 'centered'
    }
}

export const Default: Story = {
    args: {
        movie: {
            id: 1369546,
            title: 'The Apple Of My Eye',
            vote_average: 0,
            release_date: "",
            overview: '20 second Stop Motion Animation',
            genre_ids: [],
            poster_path: "wwww"
        }
    },
    parameters: {
        layout: 'centered'
    }
}