# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

ticket #1:
    title:
    Update Agent table to include 'custom_id'

    description:
    Update Agent table to include 'custom_id', the default value for it will be the internal id
    in the migration we should assign the internal id as the custom_id, the facility can update it later 

    acceptance criteria:
    [ ] Agent table now has custom_id field
    [ ] Default value for custom_id is the internal id
    [ ] Migration should update the custom_id to be the current internal id
    [ ] Update and create tests related with Agent Table

    story points: 5
        - it's not a hard task, but the assigned person should test it really well to not break anything.
        - will need to update a lot of tests

ticket #2:
    title:
    Update getShiftsByFacility, Agent metadata should also contain 'custom_id'

    description:
    the function getShiftsByFacility should be able to return the custom_id in the Agent metadata

    acceptance criteria:
    [ ] Update the function getShiftsByFacility to return the custom_id in the Agent metadata
    [ ] Update tests to see if the function getShiftsByFacility is returning the custom_id inside the Agent metadata

    story points: 3
        - it's a easy task, the assigned person will only need to update the query
        - will need to update some tests

ticket #3:
    title:
    Update getShiftsByFacility to add a new query filter based on custom_id

    description:
    the function getShiftsByFacility should be able to accept the custom_id
    as input to return only the shifts with of an Agent.

    acceptance criteria:
    [ ] Update the function getShiftsByFacility to accept the custom_id as a filter
    [ ] Update tests to see if the function getShiftsByFacility is filtering is working
        and returning the custom_id inside the Agent metadata

    story points: 3
        - it's a easy task, the assigned person will only need to update the query
        - will need to add some tests

ticket #4:
    title:
    Update generateReport, Should add a new column in the PDF with the 'custom_id'

    description:
    The Facilities will probably would like to see the custom_id in the pdf,
    so we need to update the PDF generated and include a new column with
    custom_id, the column header could be something like: 'Facility ID'

    acceptance criteria:
    [ ] Validate if the  PDF contains new column

    story points: 5
        - handle with PDF are always hard
        - I'm assuming that we will return both internal id and custom_id