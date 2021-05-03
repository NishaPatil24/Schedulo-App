/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeacher = /* GraphQL */ `
	mutation CreateTeacher(
		$input: CreateTeacherInput!
		$condition: ModelTeacherConditionInput
	) {
		createTeacher(input: $input, condition: $condition) {
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
export const updateTeacher = /* GraphQL */ `
	mutation UpdateTeacher(
		$input: UpdateTeacherInput!
		$condition: ModelTeacherConditionInput
	) {
		updateTeacher(input: $input, condition: $condition) {
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
export const updateTeacherReq = /* GraphQL */ `
	mutation UpdateTeacher(
		$input: UpdateTeacherInput!
		$condition: ModelTeacherConditionInput
	) {
		updateTeacher(input: $input, condition: $condition) {
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
export const deleteTeacher = /* GraphQL */ `
	mutation DeleteTeacher(
		$input: DeleteTeacherInput!
		$condition: ModelTeacherConditionInput
	) {
		deleteTeacher(input: $input, condition: $condition) {
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
export const createStatus = /* GraphQL */ `
	mutation CreateStatus(
		$input: CreateStatusInput!
		$condition: ModelStatusConditionInput
	) {
		createStatus(input: $input, condition: $condition) {
			id
			status
			teacherId
			lecture
			createdAt
			updatedAt
		}
	}
`;
export const updateStatus = /* GraphQL */ `
	mutation UpdateStatus(
		$input: UpdateStatusInput!
		$condition: ModelStatusConditionInput
	) {
		updateStatus(input: $input, condition: $condition) {
			id
			status
			teacherId
			lecture
			createdAt
			updatedAt
		}
	}
`;
export const deleteStatus = /* GraphQL */ `
	mutation DeleteStatus(
		$input: DeleteStatusInput!
		$condition: ModelStatusConditionInput
	) {
		deleteStatus(input: $input, condition: $condition) {
			id
			status
			teacherId
			lecture
			createdAt
			updatedAt
		}
	}
`;
