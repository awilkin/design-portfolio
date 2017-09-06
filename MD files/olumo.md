# Olumo

> golden girl #getapulse here?

Employee Engagement. Simplified.

## The Problem
Annual employee satisfaction surveys give managers and HR representatives only so much insight into how their employees are doing. Within 2 weeks, survey data (and any decision made with that data) is outdated. Managers and HR representatives rely on making gut decisions rather than informed, data-driven decisions.

### About the Project
Olumo gathers real-time employee feedback to aid managers in making informed decisions about how to make their employees happier and more productive. The following dashboards allow managers to quickly find a pulse on the heartbeat of their organization. They can view, analyze, and compare different departments to understand their employees and departments, and then make data-driven decisions based on trends they see.

> insert dashboard pic here

### My Role
Some of the fundamental design work for Olumo had already been done by the time I came in, but I designed and built several new features that made it even easier for managers to identify trends and act.

### Insights
When I arrived on the project, I found that managers only had access to the last week or two of data. It seemed to me that if a manager was to make a data-driven decision and then measure the decision's effect, two weeks was not enough data to validate the change made. Also, only one department could be viewed at a time which made comparing different areas of organizations unintuitive and difficult.

To validate this assumption, members of Olumo's team brought this idea forward to several of Olumo's clients. According to managers, seeing long-term changes in employee satisfaction is just as important as getting a quick pulse for how employees were doing today. They were enthusiastic about the idea having the freedom to customize their data analysis as needed.

We also heard from several of our contacts that they wanted a way to track the long-term effects of initiatives they took. If they have a campaign to help employees feel listened to in the work place, they only had two weeks to measure and track if there was an effect. Realistically, their initiatives may take months to effect real change.

## The Process
Starting with simple pen and paper, I quickly sketched out a few solutions. I brought them forward to a manager at the company I worked for to get his immediate feedback. He quickly told me what worked and what didn't in my designs, which I included in the next higher-fidelity sketches I completed.

> Maybe re-sketch initial sketches for graph?

#### Totals vs. Departments
For example, I initially sketched out that when all the attributes Olumo measured were selected, only one totals line would show. The manager pointed out that he would want to see specific departments compared against the entire company.

> insert side by side pics of totals line only and totals vs specific department.

#### Date Selection
In order for this new tool to be truly helpful, the date selection process had to be intuitive. I collaborated with another designer/developer on my team to create the initial designs for the date picker. We again validated our designs with managers within our organization and found that they wanted easy access to frequent timeframes, like 30 days, 3 months, 6 months, and a year.

> 3 date selection sketch files.

#### Initiative Table
After learning from our managers that they wanted to track the long-term effects of initiatives they put in place, we decided to make it easier on them. I designed a table that interfaces with the engagement graph to show current initiatives. Managers can track and identify initiatives within the initiative table. Information like what department the initiative effects, which attribute an initiative is targeting, and a date and description for the initiative.

After determining the fundamental elements of our solution, I began researching the tools that would make it possible. I researched several data visualization tools, including [D3](www.d3js.com), [highcharts](www.highcharts.com), and [Charts.js](www.chartjs.org). After confirming that our solution is possible, I built high-fidelity screens in Sketch.

### Wireframes
After the third iteration of feedback from the in-house manager, here's what the mockups looked like.
> Initial sketch files here

## The Solution
After the designs in Sketch were completed and validated, I built the front-end of the engagement graph using HTML Slim, SASS, CoffeeScript, and Ruby on Rails while coordinating with another developer who built the backend.

Managers can select departments and attributes they'd like to compare, select a date range, and then visually analyze data trends. Managers can also create initiatives to track changes they made and instantly see if there is an effect on employees.

> engagement graph - detail of selecting departments and date ranges, also show detail of initiatives

Departments that are doing stellar can be mimicked, and extra focus can be given to struggling departments. The engagement graph allows the user to drill-down and understand where exactly employees are struggling, so managers can tailor their actions to specific problems.

## The Impact
Several managers reached out to express appreciation with the new features. Within the first two weeks of the new features, managers had used the new initiative feature to track over 100 managerial actions within the workplace.

On average, we found a [%%%] increase in employee satisfaction after the engagement graph features were implemented. This feature helps both the managers who are directly using the web application and the employees who are effected by better management.
