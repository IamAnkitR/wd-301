import React from "react";

import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";

import { deleteMember } from "../../context/members/actions";

export default function MemberListItems() {
  let state: any = useMembersState();
  const { members, isLoading, isError, errorMessage } = state;

  console.log(members);

  const dispatchMembers = useMembersDispatch();

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const onDeleteMember = async (id: number) => {
    const response = await deleteMember(dispatchMembers, id);
  };

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="suspense-loading block member p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-between">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              {member.name}
            </h5>
          </div>

          <p className="mb-2 font-medium tracking-tight text-gray-900 dark:text-white">
            {member.email}
            <span className="ml-4">
              <button
                onClick={() => {
                  onDeleteMember(member.id);
                }}
                className="bg-red-800 border-2 p-1"
              >
                Delete
              </button>
            </span>
          </p>
        </div>
      ))}
    </>
  );
}
