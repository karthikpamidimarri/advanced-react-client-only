import {data} from '../testData.json';
import dataApi from '../DataApi';

const api = new dataApi(data);

describe('DataApi', ()=>{
    it('expects articles to an object', ()=>{
        const articles = api.getArticles();
        let articleId = data.articles[0].id;
        let articleTitle = data.articles[0].title;

        expect(articles).toHaveProperty(articleId));
        expect(articles[articleId].title).toBe(articleTitle);
    });

    it('expects authors to an object', ()=>{
        const authors = api.getAuthors();
        let authorId = data.authors[0].id;
        let authorName = data.authos[0].firstName;

        expect(authors).toHaveProperty(authorId));
        expect(authors[authorId].firstName).toBe(authorName);

    });
});

