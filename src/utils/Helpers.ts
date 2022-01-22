/* https://stackoverflow.com/a/7224605/522859 */
export function CapitalizeFirstCharacter(s: string)
{
    return s && s[0].toUpperCase() + s.slice(1);
}