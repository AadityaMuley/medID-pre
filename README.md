# medID-pre

The form shall have a following fields:
- Name (Text Input)
- DoB (Date Input)
- Gender (Dropdown)
- Allergies

# Instructions:
- Allergies Cell
- List of allergies can be found here https://bit.ly/2TpCy1u
- The sheet has two columns: name of allergy and the frequency of use. Depending on the frequency, shall be the order of allergies in suggestion box as shown in picture.
- If user clicks on any bubble from the suggestion box, it shall get added to the allergy input box.
- When user starts typing, the suggestion box shall change accordingly. i.e. if I type "P", the suggestion box shall only show options starting with P. Meanwhile, If the user finds his/her option, the user will tap on it.
- Otherwise the user shall be able to write his/her own new option.
- After submitting the form the data shall be stored in Google Firebase Cloud Firestore.
- Even in order to fetch the "allergy-frequency" data, store the data in firestore or any other database storage.
- Kindly use firebase free plan for all this purpose
