# A. Female Daily Website Static Replica Demo

_**To run:**_

- View hosted site **[here](http://fdn-static-ga.s3-website-us-east-1.amazonaws.com/)**

-  Or run from development / source code:

       1. Git Clone or copy entire 'fdn-static' folder with assets
       2. Open index.html under 'fdn-static' folder in browser (preferably Chrome)

**Notes**

- Best to view using browser window size of 100% (zoom browser window to 100%)
- Currently not mobile responsive
- Components are taken from sample website with image slicing method
- Website is static, no clicks or linking out to other pages


# B. Female Daily Website Static - React + Redux

_**To run:**_

- View hosted site **[here](http://fdn-static-ga.s3-website-us-east-1.amazonaws.com/)**

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
