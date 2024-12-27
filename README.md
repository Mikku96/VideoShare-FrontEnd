# VideoShare-FrontEnd (name pending)
Front End for my web based video sharing platform.

## Description
React based Front End for video platform utilizing own Back End (link later). The goal was to have a website where users can **tag and name videos** obtained from a database, find videos they are interested in and download them. In addition, filtering and ordering of the videos for ease of use were considered. Back End side processes information about the videos and generates preview clips as necessary.

```Image of site comes here, when ready.```

[See diary for images for now!](./productionLog/diary.md)

## Used technologies and techniques

* Javascript (React & React-Router(?))
* Tailwind based Styling
* Single person Scrum concept - Mainly just the introspection and Sprint logic

## Installation and running 

(For testing locally):

- Clone the project
- `npm install`
- `npm run dev` 

Back End should also be running - I will see that the Back End has some test videos when that part is done.

## Product Backlog and Progress Tracking

Progress is tracked with a [diary](./productionLog/diary.md) file and with the Product Backlog below.

[First Sprint Backlog](https://trello.com/b/SSmLGpMc/videoshare-sprint-1)

[Second Sprint Backlog](https://trello.com/b/vmm60EgD/videoshare-sprint-2)

| Description        | Status      | Sprint | Comments/Parts                                                          |
|--------------------|-------------|--------|-------------------------------------------------------------------------|
| Main page          | ✅ | 1      | Basic buttons, thumbnail grid, header                                   |
| Sample data base   | ✅ | 1      | Pick videos, manually create preview/thumbnail                          |
| Logic to videos    | ✅ | 1      | Clicking on thumbnail opens video Modal; buttons... basic for now!      |
| Navigation         | ✅ | 1       | Videos/page... 20? 50?... loading new set?                              |
| Basic search       | 🔨 | 2       | Searchbar, logic of filter                                              |
| Info database      | 🔨 | 2      | Tags/Names/Likes(?)/Comments... data that cannot be obtained from video |
| Info input         | 🔨 | 2       | Input boxes when editing data related to a video                        |
| Refine work        | 🔨 | 2       | Connect previous parts and refine i.e. Advanced Search and tag click navigation                  |
| Display video info | 🔨 | 2       | Length, likes, view count                                               |
| Login logic        | Not started |        | Simple check if user has access to the site                             |
| Study Back End     | Not started |        | Begin creating a Back End solution for video/data hosting               |
| Connect Front/Back | Not started |        | Move data from Front End to Back, and connect                           |
| Preview videos     | Not started |        | Generate preview videos at Back End when necessary                      |
| Random video       | Not started |        | Basic, and optional settings (preview generated, etc.)                  |
| Comments           | Not started |        | Add ability to add comments to videos?                                  |
| Backup logic       | Not started |        | Create automatic backups of video info data periodically                |
| Ordering videos    | Not started |        | By length, likes, preview created... many ways!                         |
|                    |             |        |                                                                         |