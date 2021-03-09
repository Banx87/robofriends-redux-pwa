// import {
//     CHANGE_SEARCH_FIELD,
//     REQUEST_ROBOTS_FAILED,
//     REQUEST_ROBOTS_PENDING,
//     REQUEST_ROBOTS_SUCCESS
// } from "./constants"

import * as reducers from './reducers';
import * as actions from './constants';
import { getDefaultNormalizer } from '@testing-library/react';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {}))
        .toEqual({searchField: ''})
    })
    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: actions.CHANGE_SEARCH_FIELD,
            payload: 'abc'}))
        .toEqual({searchField: 'abc'})
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {}))
        .toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: actions.REQUEST_ROBOTS_PENDING,
            payload: {isPending: true }
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: actions.REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots: [
                {id: '123',
                name: 'test',
                email: 'test@gmail.com'}
            ],
            isPending: false,
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: actions.REQUEST_ROBOTS_FAILED,
            payload: 'NOOOOO!!!!!'
        })).toEqual({
            isPending: false,
            error: 'NOOOOO!!!!!',
            robots: []
        })
    })
})