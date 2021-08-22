# Female Daily Website Static - React + Redux

_**To run:**_

- View hosted site **[here](https://female-daily-sample-react.web.app/)**

-  Or run from development / source code:

    ```git clone / copy folder 'fdn-react'```

    ```npm install```

    ```npm run start```

**Notes**
- Best to view using browser window size of 100% (zoom browser window to 100%)
- Currently not mobile responsive
- Component are taken partially from [external API](https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp), and partially from local asset and static json data
- Sections taken from API:

    ```Editor's Choice```
    ```Latest Articles```
    ```Latest Review```

- Latest Article's [Image link from API](https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg) does not work. It returned error 404. Hence, local image is used instead
- There are no pagination feature, except in the 'latest review' section where user can change section page by clicking on the dotted pagination icon
- All 'See More' are not clickable