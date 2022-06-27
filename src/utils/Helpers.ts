/* https://stackoverflow.com/a/7224605/522859 */
export function CapitalizeFirstCharacter(s: string)
{
    if(!s.length) return s;

    if(s.length === 1) return s.toUpperCase();

    return s[0].toUpperCase() + s.slice(1);
}