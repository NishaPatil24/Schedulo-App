/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeacher = /* GraphQL */ `
	query GetTeacher($id: ID!) {
		getTeacher(id: $id) {
			id
			teacherId
			name
			dept
			phone
			status
			lecture
			roomNumber
			createdAt
			updatedAt
		}
	}
`;
export const getTeacherReq = /* GraphQL */ `
	query GetTeacher($id: ID!) {
		getTeacher(id: $id) {
			id
			teacherId
			name
			dept
			phone
			status
			lecture
			roomNumber
		}
	}
`;
export const listTeachers = /* GraphQL */ `
	query ListTeachers(
		$filter: ModelTeacherFilterInput
		$limit: Int
		$nextToken: String
	) {
		listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				teacherId
				name
				dept
				phone
				status
				lecture
				roomNumber
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
export const getStatus = /* GraphQL */ `
	query GetStatus($id: ID!) {
		getStatus(id: $id) {
			id
			status
			teacherId
			lecture
			createdAt
			updatedAt
		}
	}
`;
export const listStatuss = /* GraphQL */ `
	query ListStatuss(
		$filter: ModelStatusFilterInput
		$limit: Int
		$nextToken: String
	) {
		listStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				status
				teacherId
				lecture
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
