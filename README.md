# SURVEY FOR THE MINOR - WEB

This project is focused on web accessibility. The web has to accessible to everyone. For this project, i am going to make website that is accessible to everyone. This website should be able to work on all browsers

## What is the userstory?

I would want to be able to fill in a survey about the minor Web development. with different multiple answers. I would also want to know where i am in the form and what my next step is . I would also want to see already filled in questions . If i am not able to finish with filling in the survey, i would like to be able to continue from where i stopped or got to.

## Requirements for the survey

-   Name of student
-   Name of lecturer or lecturers
-   The week in which you followed this course
-   Grade from a scale of 1 to 10
-   Lessons ( How difficult it is )
-   Explain( Was this course well taught)
-   Personal understanding ( How well dom you understand it )

-   Validation
    -   The survey has to be complete
    -   Provide clear error messages
    -   Decide for yourself when and how the validation will take place
-   Make a clear interface tat allows the user to go back to previous questions (And maybe also skip to a question)
-   Clear interface that indicates where you are in the survey
-   Visible radio buttons are not allowed only if css is been applied.
-   The form should have a darkmode and light mode

## Core functionalities of my survey

-   Indicate where you are in the survey
-   Placeholder in the labels
-   All the questions wont be displaced at ones
-   Survey should be presentable without css
-   Survey should work without js
-   Validation should be shown in text with no red color for people who are color blind
-   A good contrast between the background and the foreground.
-   Labels, submit buttons should be able to work .

## Inspirations

Went on pinterest looking fot inspirations for my specific design for my survey. Like how i want to visualize the grade question.

**Inspiration for layout** 

![Images](./img/layout1.png)

**Inspiration for grading** 

![Images](./img/grade.png)

![Images](./img/grade2.png)

![Images](./img/grade3.png)


## Form validation

### Html form validation

### what is form validation? 

Form validation is the process of ensuring that the data entered into a web form is correct and meets certain criteria before it is submitted to the server. It is an important aspect of web development as it helps prevent errors and ensures that the data collected is accurate and consistent.

### Form validation with html ? 

HTML provides a few built-in form validation attributes that can be added to form elements to ensure that the data entered meets certain criteria. These attributes work on the client-side using JavaScript and can provide immediate feedback to the user.

- Required attributes. I used the required attributes for the email inout to make it a required field so if the input is left bkank, a validation error message will appear.

<img width="622" alt="image" src="https://user-images.githubusercontent.com/90154152/229869545-2726a4b6-43c3-4ab5-8fba-128ca3a13c84.png">

- Pattern Attribute. i used the pattern atrribute to specify a regular expressen that the data must match . With the student id. I made a added the pattern to the input so when the id provided by the user is less than 9 numbers. The error message then shows. 

<img width="606" alt="image" src="https://user-images.githubusercontent.com/90154152/229870043-3cb7b42e-5288-4f0b-8dcc-3f77db5e6c5e.png">

### Form validation with CSS

Form validation in CSS can be done using the :valid and :invalid pseudo-classes. When a user inputs data into a form field, these pseudo-classes can be used to style the input based on whether the data entered is valid or not.


I used the valid and invalid pseudo classes for my inputs with the has selector. 
















 


### Resources



